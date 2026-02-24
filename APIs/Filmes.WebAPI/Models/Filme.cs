using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace FilmesContext.WebAPI.Models;

public partial class Filme
{
    [Key]
    [StringLength(40)]
    [Unicode(false)]
    public string IdFilmes { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string? Imagem { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string Titulo { get; set; } = null!;

    [StringLength(40)]
    [Unicode(false)]
    public string? IdGenero { get; set; }

    [ForeignKey("IdGenero")]
    [InverseProperty("Filmes")]
    public virtual Genero? IdGeneroNavigation { get; set; }
    public object? IdFilme { get; internal set; }
    public object Genero { get; internal set; }
}
