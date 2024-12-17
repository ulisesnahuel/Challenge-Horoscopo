using Horoscope.Application.Contracts;
using Horoscope.Application.Dtos.Request;
using Horoscope.Application.Dtos.Response;
using Horoscope.Infrastructure.Services.Utilities;
using System.Net.Http.Json;

namespace Horoscope.Infrastructure.Services
{
    public class HoroscopeService: IHoroscopeService
    {
        private readonly HttpClient _http;
        private readonly ZodiacSignCalculator _zodiacSignCalculator;

        public HoroscopeService(HttpClient http, ZodiacSignCalculator zodiacSignCalculator)
        { 
            _http = http;
            _zodiacSignCalculator = zodiacSignCalculator;
        }

        public async Task<HoroscopeResponse> GetHoroscopeAsync(HoroscopeDto model)
        {
            var sign = _zodiacSignCalculator.GetZodiacSign(model.BirthDate);
            var date = model.BirthDate.ToString("yyyy-MM-dd");

            var response = await _http.GetAsync($"https://newastro.vercel.app/{sign}/?date={date}&lang=es");
            if (response.StatusCode == System.Net.HttpStatusCode.BadRequest)
            {
                return new HoroscopeResponse { Flag = false };
            }
            else
            {
                if (response.IsSuccessStatusCode)
                {
                    var horoscopeResult = await response.Content.ReadFromJsonAsync<HoroscopeResponse>();

                    if (horoscopeResult != null && !string.IsNullOrEmpty(horoscopeResult.horoscope))
                    {
                        return new HoroscopeResponse
                        {
                            Flag = true,
                            horoscope = horoscopeResult.horoscope,
                            Sign = horoscopeResult.Sign
                        };
                    }
                }
                return new HoroscopeResponse { Flag = false };
            }
        }



      
    }
}
