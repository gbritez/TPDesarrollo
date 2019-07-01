using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TrabajoPracticoBritezAPI.Models;

namespace TrabajoPracticoBritezAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private TrabajoPacticoBritezDBEntities db = new TrabajoPacticoBritezDBEntities();

        [HttpPost, Route("Login/authenticate")]
        
        public IHttpActionResult Authenticate(LoginModel model)
        {

            var user = db.Usuarios.Find(model.User);
            if(user!= null)
            {
                if(user.type == "admin")
                {
                    return Ok("admin");
                }
                else
                {
                    return Ok("user");
                }
            }
            return Unauthorized();
           
        }
    }
}
