using Horoscope.Application.Contracts;
using Horoscope.Infrastructure.Data;
using Horoscope.Infrastructure.Repositories;
using Horoscope.Infrastructure.Services;
using Horoscope.Infrastructure.Services.Utilities;
using Horoscope.Infrastructure.Utilities.MapperProfiles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace Horoscope.Infrastructure.DependencyInjection
{
    public static class ServiceContainer
    {
        public static IServiceCollection AddInfrastructureService(this IServiceCollection services, IConfiguration config)
        {
  
            var connectionString = config.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
             options.UseMySQL(connectionString));

            services.AddAutoMapper(typeof(MapperProfile));

            services.AddHttpClient();


            services.AddScoped<ZodiacSignCalculator>();
            services.AddScoped<IHoroscopeService, HoroscopeService>();
            services.AddScoped<IHoroscopeRepository, HoroscopeRepository>();

            return services;
        }
    }
}
