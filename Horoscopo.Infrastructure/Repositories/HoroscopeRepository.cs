using AutoMapper;
using Horoscope.Application.Contracts;
using Horoscope.Application.Dtos.Request;
using Horoscope.Application.Dtos.Response;
using Horoscope.Infrastructure.Data;
using Horoscope.Infrastructure.Services;
using Horoscopo.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Infrastructure.Repositories
{
    public class HoroscopeRepository : IHoroscopeRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IHoroscopeService _horoscopeService;

        public HoroscopeRepository(ApplicationDbContext context, IMapper mapper, IHoroscopeService horoscopeService)
        {
            _context = context;
            _mapper = mapper;
            _horoscopeService = horoscopeService;
        }

        public async Task<GeneralResponse<GetHoroscopeDto>> GetHoroscopeAsync(HoroscopeDto model)
        {
            var resultHoroscope = await _horoscopeService.GetHoroscopeAsync(model);
            if (resultHoroscope.Flag is false)
            {
                return new GeneralResponse<GetHoroscopeDto>(Flag: false, Message: "Error al obtener el horóscopo.");
            }
            else
            {
                var horoscopeLog = new CreateLogDto
                {
                    BirthDate = model.BirthDate,
                    Gender = model.Gender.ToString(),
                    Name = model.Name,
                    Email = model.Email,
                    Sign = resultHoroscope.Sign,
                };

                var CreatedLog = await SaveLogAsync(horoscopeLog);
                if (CreatedLog.Flag is false)
                {
                    return new GeneralResponse<GetHoroscopeDto>(Flag: false, Message: "Error al guardar datos del usuario.");
                }
                else
                {
                    var horoscopeResult = new GetHoroscopeDto
                    {
                        Name = model.Name,
                        HoroscopeMessage = resultHoroscope.horoscope,
                        Sign = horoscopeLog.Sign,
                        DaysUntilBirthday = DaysUntilBirthDate(model.BirthDate)
                    };

                    return new GeneralResponse<GetHoroscopeDto>(true,"Resuelto!", horoscopeResult);

                }
            }
            
        }


        public int DaysUntilBirthDate(DateTime birthDate)
        {
            var today = DateTime.Today;
            var nextBirthday = new DateTime(today.Year, birthDate.Month, birthDate.Day);
            if (nextBirthday < today)
            {
                nextBirthday = nextBirthday.AddYears(1);
            }
            var daysUntilBirthday = (nextBirthday - today).Days;
            return daysUntilBirthday;
        }



        public async Task<GeneralResponse> SaveLogAsync(CreateLogDto model)
        {
            try
            {
                await _context.horoscopeLogs.AddAsync(_mapper.Map<HoroscopeLog>(model));
                var result = await _context.SaveChangesAsync();
                if (result > 0)
                {
                    return new GeneralResponse { Flag = true, Message = "Registro Agregado." };
                }
                return new GeneralResponse { Flag = false, Message = "Error al agregar" };
            }
            catch (Exception ex)
            {
                return new GeneralResponse { Flag = false, Message = ex.Message };
            }

        }
    }
}
