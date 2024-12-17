using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Dtos.Request
{
    public class HoroscopeDto
    {
        [Required(ErrorMessage = "El campo es obligatorio.")]
        [RegularExpression(@"^(Male|Female|BiGender)$", ErrorMessage = "El valor debe ser 'Male', 'Female' o 'BiGender'.")]

        public string Gender { get; set; }
        [Required(ErrorMessage = "El campo  es obligatorio.")]
        [EmailAddress(ErrorMessage = "El formato del correo no es válido.")]

        public string Email { get; set; }
        [Required(ErrorMessage = "El campo  es obligatorio.")]

        public string Name {  get; set; }
        [Required(ErrorMessage = "El campo es obligatorio.")]

        public DateTime BirthDate { get; set; }
    }



}
