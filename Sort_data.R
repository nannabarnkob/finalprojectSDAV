
setwd("~/finalprojectSDAV-master/finalprojectSDAV")
Full_data <- read.csv("socio_data_kbh.csv")

Sorted_data <- Full_data[,c(3,5,7:21,25:35,63:70)]
write.csv(Sorted_data, file = "Sorted_data.csv",row.names=TRUE)
