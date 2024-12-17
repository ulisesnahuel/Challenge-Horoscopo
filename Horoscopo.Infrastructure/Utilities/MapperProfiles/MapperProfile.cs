using AutoMapper;
using Horoscope.Application.Dtos.Request;
using Horoscopo.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Infrastructure.Utilities.MapperProfiles
{
    public class MapperProfile: Profile
    {
        public MapperProfile() 
        {
            CreateMap<CreateLogDto, HoroscopeLog>()
                .ReverseMap();


        }
    }
}
