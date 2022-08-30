using RazorEngine;
using RazorEngine.Templating;

namespace Kaihatsu.NotificationManager.Report.Razor;

public static class Razor
{
    public static string GenerateMessage(RazorTemplate template)
    {
        var rezult = Engine.Razor.RunCompile(template.Template, "Template", null, new
        {
            Title = template.Title,
            Content = template.Content
        });

        return rezult.ToString();
    }
}

public class RazorTemplate
{
    public string Template { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
}