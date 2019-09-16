import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit{
  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spiner: boolean;

  constructor(private produtoServico: ProdutoServico) {
  }

  ngOnInit(): void {
    this.produto = new Produto();

  }

  public inputChange(files: FileList) {
    this.ativar_spiner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);
          this.ativar_spiner = false;
        },
        e => {
          console.log(e.error);
          this.ativar_spiner = false;
        };
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        e => {
          console.log(e.error);
        }
      );
  }

  }
