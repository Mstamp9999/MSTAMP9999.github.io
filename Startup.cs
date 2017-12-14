using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LegoBlog.Startup))]
namespace LegoBlog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
