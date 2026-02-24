using FilmesContext.WebAPI.Models;

namespace FilmesContext.WebAPI.Interface;

public interface IFilmeRepository
{
    void Cadastrar(Models.Filme novoFilme);
    void AtualizarIdCorpo(Models.Filme filmeAtualizado);
    void AtualizarIdUrl(Guid id, Models.Filme filmeAtualizado);
    List<Models.Filme> Listar();
    void Deletar(Guid id);
    Models.Filme BuscarPorId(Guid id);
}
