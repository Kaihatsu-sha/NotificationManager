using Kaihatsu.NotificationManager.Core.Interfaces;
using Kaihatsu.NotificationManager.DAL.Context;
using Kaihatsu.NotificationManager.DAL.Repository;
//using Kaihatsu.NotificationManager.DAL.MSSQL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ManagerContext>(opt => 
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"), p => p.MigrationsAssembly("Kaihatsu.NotificationManager.DAL.MSSQL"))
);

builder.Services.AddScoped(typeof(IRepositoryAsync<>),typeof(NotificationManagerRepository<>));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
