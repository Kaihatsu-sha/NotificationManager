using Kaihatsu.NotificationManager.Core.Interfaces;
using Kaihatsu.NotificationManager.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Kaihatsu.NotificationManager.NotificationAPI.Controllers
{
    [Route("api/Messages")]
    public class MessagesApiController : ControllerBase
    {
        private readonly ILogger<MessagesApiController> _logger;
        private readonly IRepositoryAsync<Message> _repository;
        public MessagesApiController(IRepositoryAsync<Message> repository, ILogger<MessagesApiController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var messages = await _repository.GetAllAsync();

            List<MessageDto> templatesList = new List<MessageDto>();
            foreach (Message item in messages)
            {
                templatesList.Add(new MessageDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Recipient = item.Recipient,
                    SenderType = item.SenderType,
                    TemplateId = item.TemplateId,
                    Content = Encoding.UTF8.GetString(item.Content)//Convert.ToBase64String(templates.First().Content)//
                });
            }

            return Ok(templatesList);
        }

        [HttpPost]
        public async Task<IActionResult> Create(MessageDto item)
        {
            Message dbItem = new Message
            {
                Name = item.Name,
                Recipient = item.Recipient,
                SenderType = item.SenderType,
                TemplateId = item.TemplateId,
                Content = Encoding.UTF8.GetBytes(item.Content)
            };
            await _repository.AddAsync(dbItem);
            return Ok(item);
        }
    }
}
