# PlantUML
@startuml
actor User
interface Client
interface Server
database MySQL

User ->> Client : Event
User <<- Client : HTML Document
Client ->> Server : Http Request
Server ->> Client : Http Response
Server <<- MySQL : Data
@enduml