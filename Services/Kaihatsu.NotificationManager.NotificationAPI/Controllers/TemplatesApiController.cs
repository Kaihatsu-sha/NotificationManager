using Kaihatsu.NotificationManager.Core.Interfaces;
using Kaihatsu.NotificationManager.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Kaihatsu.NotificationManager.NotificationAPI.Controllers;

[Route("api/templates")]
public class TemplatesApiController : ControllerBase
{
    private readonly IRepositoryAsync<Template> _repository;
    public TemplatesApiController(IRepositoryAsync<Template> repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var templates = await _repository.GetAllAsync();

        List<TemplateDTO> templatesList = new List<TemplateDTO>();
        foreach (Template template in templates)
        {
            templatesList.Add(new TemplateDTO
            {
                Id = template.Id,
                Name = template.Name,
                Title = template.Title,
                Content = Encoding.UTF8.GetString(template.Content)//Convert.ToBase64String(templates.First().Content)//
            });
        }

        return Ok(templatesList);
    }

    [HttpPost]
    public async Task<IActionResult> Create(TemplateDTO item)
    {
        Template template = new Template
        {
            Name = item.Name,
            Title = item.Title,
            Content = Encoding.UTF8.GetBytes(item.Content)
        };
        await _repository.AddAsync(template);
        return Ok(item);
    }
}
