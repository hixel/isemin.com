using Microsoft.Owin;

[assembly: OwinStartup(typeof(isemin.com.Startup))]
namespace isemin.com
{
    using Owin;

    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}