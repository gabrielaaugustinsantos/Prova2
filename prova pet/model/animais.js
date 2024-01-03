module.exports = class animais { 
    constructor() {
      this.registro = "";
      this.nome = "";
      this.especie= "";
      this.nascimento = 0;
    }

    listar(conexao, callback) {
        var sql = "select * from animais";
    
        conexao.query(sql, 
          function (err, result) {
            if (err) throw err;
            return  callback(result);
          }
        );
      }

      inserir(conexao) {
        var sql = "insert into animais (registro, nome, especie, nascimento) values (?, ?, ?, ?)";
        conexao.query(sql, 
                      [this.registro, this.nome, this.especie, this.nascimento],
                      function (err, result) {
                        if (err) throw err;
                      }
        );
    
      }
    
      atualizar(conexao) {
        
      }
    
      excluir(conexao) {
        
      }
    }

