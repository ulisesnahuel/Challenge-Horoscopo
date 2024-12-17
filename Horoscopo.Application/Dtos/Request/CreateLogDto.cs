using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Dtos.Request
{
    public class CreateLogDto
    {
        public int Id { get; set; } 
        public string Name { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime BirthDate { get; set; }
        public string Sign { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }

    }
}
