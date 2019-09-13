using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if (usuario.Email == "a@a.com" && usuario.Senha == "123")
                {
                    return Ok(usuario);
                }
                return BadRequest("Usuario ou senha inválidos");
            }
            catch (System.Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }
    }
}