# Initialize renv if not already initialized
if (!file.exists("renv.lock")) {
  renv::init()
}

# Restore the project's dependencies
renv::restore()

# Load required packages
library(shiny)
library(tidyverse)
library(stringr)

# Read and parse the data from result_R.txt
result_text <- readLines("result_R_app.txt")
# Remove curly braces and split by comma
stations_data <- str_split(gsub("[{}]", "", result_text), ", ")[[1]]
# Convert to data frame
df <- data.frame(
  do.call(rbind, strsplit(stations_data, "=|/")),
  stringsAsFactors = FALSE
)
colnames(df) <- c("station", "min_temp", "mean_temp", "max_temp")
df$min_temp <- as.numeric(df$min_temp)
df$mean_temp <- as.numeric(df$mean_temp)
df$max_temp <- as.numeric(df$max_temp)

# Define UI
ui <- fluidPage(
  # Custom CSS for blue bars
  tags$head(
    tags$style(HTML("
      .header-bar, .footer-bar {
        background-color: #0066cc;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
      }
      .footer-bar {
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-bottom: 0;
      }
    "))
  ),
  
  # Header bar
  div(class = "header-bar",
      h1("Temperature in train stations around the globe", 
         style = "text-align: center;")),
  
  # Main content
  sidebarLayout(
    sidebarPanel(
      selectizeInput("stations", "Select Stations (up to 10)", 
                    choices = sort(unique(df$station)),
                    multiple = TRUE,
                    options = list(maxItems = 10,
                                 placeholder = 'Type to search stations')),
      width = 3
    ),
    
    mainPanel(
      plotOutput("tempPlot", height = "600px"),
      width = 9
    )
  ),
  
  # Footer bar
  div(class = "footer-bar")
)

# Define server logic
server <- function(input, output) {
  output$tempPlot <- renderPlot({
    req(input$stations)
    
    # Filter data for selected stations
    plot_data <- df %>%
      filter(station %in% input$stations)
    
    # Create the plot
    ggplot(plot_data) +
      # Temperature range segment
      geom_segment(aes(x = station, xend = station,
                       y = min_temp, yend = max_temp),
                   color = "black", size = 1) +
      # Main temperature range rectangle
      geom_rect(aes(xmin = as.numeric(factor(station)) - 0.2,
                    xmax = as.numeric(factor(station)) + 0.2,
                    ymin = min_temp,
                    ymax = max_temp),
                fill = "white",
                color = "black") +
      # Mean temperature line
      geom_segment(aes(x = as.numeric(factor(station)) - 0.2,
                      xend = as.numeric(factor(station)) + 0.2,
                      y = mean_temp, 
                      yend = mean_temp),
                   color = "black", 
                   size = 1.5) +
      coord_flip() +
      theme_minimal() +
      labs(x = "Station",
           y = "Temperature (°C)",
           title = "Temperature Range by Station in degrees Farenheit\n
		   (min, mean, max)") +
      theme(
        plot.background = element_rect(fill = "white"),
        panel.grid.major = element_line(color = "grey90"),
        panel.grid.minor = element_line(color = "grey95"),
        axis.text = element_text(size = 12),
        axis.title = element_text(size = 14),
        plot.title = element_text(size = 16, hjust = 0.5)
      )
  })
}

# Run the application
shiny::shinyApp(ui = ui, server = server)