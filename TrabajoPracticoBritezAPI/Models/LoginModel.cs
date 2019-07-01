using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticoBritezAPI.Models
{
    public class LoginModel
    {
        public string User { get; set; }
        public string Password { get; set; }
        public string Type { get; set; }
    }
}