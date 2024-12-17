using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Dtos.Response
{
    public record HoroscopeResponse(bool Flag = false, string horoscope = null!,string Sign = null!);
    
}
