using Kaihatsu.NotificationManager.Core.Interfaces;
using Kaihatsu.NotificationManager.DAL.Entities;
using Kaihatsu.NotificationManager.Report.Razor;
using Microsoft.AspNetCore.Mvc;

namespace Kaihatsu.NotificationManager.NotificationAPI.Controllers;

[Route("api/Senders")]
public class SenderApiController : ControllerBase
{
    private readonly IRepositoryAsync<Message> _messageRepository;
    private readonly IRepositoryAsync<Template> _templateRepository;

    public SenderApiController(IRepositoryAsync<Message> messageRepository, IRepositoryAsync<Template> templateRepository)
    {
        _messageRepository = messageRepository;
        _templateRepository = templateRepository;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Send(int id)
    {
        var message = await _messageRepository.GetByIdAsync<int>(id);
        
        if (message is null)
            return NotFound();

        var template = await _templateRepository.GetByIdAsync<int>(message.TemplateId);
        var result = Razor.GenerateMessage(new RazorTemplate
        {
            Title = template.Title,
            Template = System.Text.Encoding.UTF8.GetString(template.Content),
            Content = System.Text.Encoding.UTF8.GetString(message.Content)
        });
        return Ok(result);

    }
}
