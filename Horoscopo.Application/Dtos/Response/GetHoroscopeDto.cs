using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Dtos.Response
{
    public class GetHoroscopeDto
    {
        public string Name {  get; set; } = string.Empty;
        public string HoroscopeMessage { get; set; } = string.Empty;
        public string Sign {  get; set; } = string.Empty;
        public int DaysUntilBirthday {  get; set; }

    }
}
