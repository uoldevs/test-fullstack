FROM maven:3.9-eclipse-temurin-20-alpine AS build
COPY backend/src /home/app/src
COPY backend/pom.xml /home/app
#realiza o build com Maven com testes desativados
RUN mvn -f /home/app/pom.xml -DskipTests package
ENTRYPOINT ["java","-jar","/home/app/target/backend-0.0.1-SNAPSHOT.jar"]
