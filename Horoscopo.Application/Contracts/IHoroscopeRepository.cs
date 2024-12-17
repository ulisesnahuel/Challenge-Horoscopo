using Horoscope.Application.Dtos.Request;
using Horoscope.Application.Dtos.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Contracts
{
    public interface IHoroscopeRepository
    {

        Task<GeneralResponse<GetHoroscopeDto>> GetHoroscopeAsync(HoroscopeDto model);

        
    }
}
