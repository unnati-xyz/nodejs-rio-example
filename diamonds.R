library(dplyr)
library(ggplot2)
library(jsonlite)


getSampleDetails <- function(params) {
  print("sample size sent to R")
  params <- fromJSON(params)
  print(params)
  
  data <- diamonds %>%
    sample_n(as.numeric(params$sample_size))

  price <- data$price
  s <- summary(price)
  sum_df <- as.data.frame(as.matrix(s), ids=list(names(s)))
  names(sum_df) <- "metrics"

  res_json <- toJSON(sum_df, dataframe =  "values")

  return(as.character(res_json))
}
