#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Horoscopo.Api/Horoscope.Api.csproj", "Horoscopo.Api/"]
COPY ["Horoscopo.Infrastructure/Horoscope.Infrastructure.csproj", "Horoscopo.Infrastructure/"]
COPY ["Horoscopo.Application/Horoscope.Application.csproj", "Horoscopo.Application/"]
COPY ["Horoscopo.Domain/Horoscope.Domain.csproj", "Horoscopo.Domain/"]
RUN dotnet restore "./Horoscopo.Api/Horoscope.Api.csproj"
COPY . .
WORKDIR "/src/Horoscopo.Api"
RUN dotnet build "./Horoscope.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Horoscope.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Horoscope.Api.dll"]