using AutoMapper;
using Horoscope.Application.Contracts;
using Horoscope.Application.Dtos.Request;
using Horoscope.Application.Dtos.Response;
using Horoscope.Infrastructure.Data;
using Horoscope.Infrastructure.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Horoscope.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoroscopeController : ControllerBase
    {
        private readonly IHoroscopeRepository _horoscopeRepository;
        private readonly IMapper _mapper;
        public HoroscopeController(IHoroscopeRepository horoscopeRepository, IMapper mapper ) 
        {
            _horoscopeRepository = horoscopeRepository;
            _mapper = mapper;
        }

     
        [HttpPost("horoscope")]
        [SwaggerOperation(
        Summary = "Obtiene el horóscopo de un cliente.",
        Description = "Guarda los datos del cliente y consulta el horóscopo de un servicio externo."
    )]
        [ProducesResponseType(typeof(GeneralResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(GeneralResponse), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetHoroscopeAsync([FromBody] HoroscopeDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new GeneralResponse(false, "El modelo no puede ser nulo"));
            }

            var result = await _horoscopeRepository.GetHoroscopeAsync(model);
            if (!result.Flag)
            {
                return BadRequest(result.Message);

            }

            return Ok(result.Model);  
        }


    }
}
