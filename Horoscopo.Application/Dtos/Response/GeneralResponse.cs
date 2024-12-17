using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Application.Dtos.Response
{
    public record GeneralResponse<T>(bool Flag = false, string Message = null!, T Model = null!) where T : class;
    public record GeneralResponse(bool Flag = false, string Message = null!);


}
