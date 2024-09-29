# Chọn base image
FROM maven:3.9.9~openjdk-17 AS build
FROM openjdk:17-jdk-slim

# Thiết lập thư mục làm việc
WORKDIR /app
COPY ./app/
RUN mvn clean package

# Sao chép file jar từ target sang container
COPY target/my-spring-boot-app.jar app.jar

# Cấu hình biến môi trường (nếu cần)
ENV JAVA_OPTS="-Xmx512m"

# Chạy ứng dụng
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
