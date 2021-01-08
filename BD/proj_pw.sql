-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Jun-2020 às 18:20
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `proj_pw`
--

DELIMITER $$
--
-- Procedimentos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_Cliente` (IN `c_nome` VARCHAR(60), IN `c_nif` INT, IN `c_data_nascimento` DATE, IN `c_sangue` CHAR(5))  BEGIN
insert into clientes (cliente_nome,cliente_nif,cliente_data_nasc,cliente_sangue) values(c_nome,c_nif,c_data_nascimento,c_sangue);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_Pagamento` (IN `c_nome` CHAR(100), IN `m_pagamento_nome` CHAR(30), IN `p_preco` FLOAT, IN `e_pagamento_nome` CHAR(5))  BEGIN
DECLARE idEstadopagamento INT DEFAULT 0;
Declare idMetodopagamento int default 0;
Declare idCliente int default 0;
SELECT 
    metodo_pagamento_id
INTO idMetodopagamento FROM
    metodo_pagamento
WHERE
    metodo_pagamento_descricao = m_pagamento_nome;
    
    SELECT 
    estado_pagamento_id
INTO idEstadopagamento FROM
    estado_pagamento
WHERE
   estado_pagamento_descricao  = e_pagamento_nome;
   
    SELECT 
    cliente_id
INTO idCliente FROM
    clientes
WHERE
   cliente_nome = c_nome;



insert into Pagamento (Cliente_id,Metodo_pagamento_id,Preco,Estado_pagamento_id)values(idCliente,idMetodopagamento,p_preco,idEstadopagamento);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_prof` (IN `p_saude_nome` CHAR(100), IN `p_saude_nif` INT, IN `p_saude_sangue` CHAR(5), IN `a_saude_nome` CHAR(50))  BEGIN
Declare idSaude int default 0;
  SELECT 
   area_saude_id
INTO idSaude FROM
    area_saude
WHERE
    area_saude_nome = a_saude_nome;

INSERT INTO prof_saude(prof_saude_nome, prof_saude_nif, prof_saude_sangue, area_saude_id)
VALUES(p_saude_nome, p_saude_nif ,p_saude_sangue, idSaude);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_receita` (IN `r_obs` CHAR(125))  BEGIN
 insert into receita (receita_obs) values(r_obs);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_receitaDetalhe` (IN `r_id` INT, IN `m_nome` CHAR(125), IN `r_quantidade` INT, IN `r_dosagem` INT)  BEGIN
Declare idMedicamento int default 0;
  SELECT 
  medicamento_id
INTO idMedicamento FROM
    medicamento
WHERE
    medicamento_nome = m_nome;
 INSERT INTO receita_detalhe (receita_id, medicamento_id, quantidade, dosagem)
VALUES (r_id,idMedicamento, r_quantidade, r_dosagem);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_adicionar_servico` (IN `S_datahora` DATETIME, IN `S_Duracao_Prevista` CHAR(100), IN `S_Descricao` CHAR(125), IN `p_id` INT, IN `t_servico_nome` CHAR(100), IN `r_id` INT, IN `c_nome` CHAR(100))  BEGIN
Declare idCliente int default 0;
Declare idServico int default 0;
  SELECT 
   tipo_servico_id
INTO idServico FROM
    tipo_servico
WHERE
    tipo_servico_nome = t_servico_nome;
     
     SELECT 
   cliente_id
INTO idCliente FROM
    clientes
WHERE
  cliente_nome  = c_nome;

insert into servico (Servico_datahora, Servico_Duracao_Prevista, Servico_Descricao, Pagamento_id, tipo_servico_id, receita_id, cliente_id)
values( S_datahora, S_Duracao_Prevista, S_Descricao, p_id, idServico, r_id, idCliente);
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_apagar_cliente` (IN `c_nome` CHAR(50))  begin
-- nao esta a funcionar
Declare idCliente int default 0;
Declare idPagamento int default 0;
 Declare idServico int default 0;
SELECT 
   cliente_id
INTO idCliente FROM
    clientes
WHERE
    cliente_nome = c_nome;
    
    SELECT 
   pagamento_id
INTO idPagamento FROM
    pagamento
WHERE
  cliente_id =idCliente;
 
SELECT 
   servico_id
INTO idServico FROM
    servico
WHERE
   pagamento_id  = idPagamento;
   
 delete from servico where cliente_id = idCliente;  
delete from pagamento where pagamento_id = idPagamento;
delete from equipa where servico_id = idServico;
delete from clientes where cliente_id = idCliente;

end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_apagar_pagamento` (IN `p_id` INT)  begin
Declare idServico int default 0;
SELECT 
   servico_id
INTO idServico FROM
    servico
WHERE
   pagamento_id  = p_id;
   delete from equipa where servico_id = idServico;
 delete from servico where servico_id = idServico;
delete from pagamento where pagamento_id = p_id;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_apagar_servico` (IN `s_id` INT)  BEGIN
delete from servico where servico_id = s_id;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_atualizar_cliente` (IN `c_nome` VARCHAR(60), IN `c_nif` INT, IN `c_datclientesa_nascimento` DATE, IN `c_sangue` CHAR(5))  BEGIN
Declare idCliente int default 0;
    SELECT 
    cliente_id
INTO idCliente FROM
    clientes
WHERE
   cliente_nome = c_nome;


UPDATE clientes
SET cliente_nif =c_nif,cliente_data_nasc=c_datclientesa_nascimento,cliente_sangue=c_sangue
WHERE cliente_id = idCliente;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_atualizar_Pagamento` (IN `p_id` INT, IN `m_pagamento_nome` CHAR(30), IN `p_preco` FLOAT, IN `e_pagamento_nome` CHAR(5))  BEGIN
DECLARE idEstadopagamento INT DEFAULT 0;
Declare idMetodopagamento int default 0;
SELECT 
    metodo_pagamento_id
INTO idMetodopagamento FROM
    metodo_pagamento
WHERE
    metodo_pagamento_descricao = m_pagamento_nome;
    
    SELECT 
    estado_pagamento_id
INTO idEstadopagamento FROM
    estado_pagamento
WHERE
   estado_pagamento_descricao  = e_pagamento_nome;
   

UPDATE pagamento
SET metodo_pagamento_id=idMetodopagamento,estado_pagamento_id=idEstadopagamento,preco = p_preco
WHERE pagamento_id =p_id;
 END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_cliente_sangue` (IN `c_sangue1` CHAR(5), IN `c_sangue2` CHAR(5))  BEGIN
SELECT 
  cliente_nome as "Nome",
  cliente_data_nasc as "Data Nascimento",
  cliente_sangue as "Sangue"
FROM
    clientes

where clientes.cliente_sangue = c_sangue1
    OR clientes.cliente_sangue = c_sangue2;
    END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Estado_Pagamento` (IN `e_Pagamento` CHAR(50))  BEGIN
 Declare idEstadoPagamento int default 0;
SELECT 
   estado_pagamento_id
INTO idEstadoPagamento FROM
    estado_pagamento
WHERE
 estado_pagamento_descricao = e_Pagamento;
    
SELECT 
    cliente_nome AS 'Nome Cliente',
    estado_pagamento.estado_pagamento_descricao AS 'Estado Do Pagamento',
    pagamento.preco AS 'Preço'
FROM
    pagamento
        JOIN
    clientes ON clientes.cliente_id = pagamento.cliente_id
        JOIN
    estado_pagamento ON estado_pagamento.estado_pagamento_id = pagamento.estado_pagamento_id
WHERE
    pagamento.estado_pagamento_id = idEstadoPagamento;
    END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_servico_profsaude` (IN `s_id` INT)  BEGIN
SELECT 
    prof_saude_nome AS 'Nome'
FROM
    prof_saude
        JOIN
    area_saude ON prof_saude.area_saude_id = area_saude.area_saude_id
        JOIN
    tipo_servico ON tipo_servico.area_saude_id = area_saude.area_saude_id
        JOIN
    servico ON servico.tipo_Servico_id = tipo_servico.tipo_Servico_id
WHERE
    servico_id = s_id;
    END$$

--
-- Funções
--
CREATE DEFINER=`root`@`localhost` FUNCTION `fun_obter_dias` (`id_pagamento` INT) RETURNS LONGTEXT CHARSET utf8 COLLATE utf8_bin BEGIN
	DECLARE diff int default 0;
     Declare data_pagamento date;
     declare res LONGTEXT;
SELECT 
   servico_dataHora
INTO data_pagamento FROM
    servico
WHERE
 pagamento_id = id_pagamento;
		
SELECT DATEDIFF(CURDATE(),data_pagamento) into diff ;

IF diff <= 30 THEN 
   SET res = "Emitir pagamento";
END IF;
IF diff > 30 and diff <=60 THEN 
   SET res = "verificar Pagamento";
END IF;

    RETURN res;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fun_obter_total` () RETURNS INT(11) BEGIN	
	declare res int ;
SELECT 
   count(*)
INTO res FROM
    clientes;

    RETURN res;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `post`
--

CREATE TABLE `post` (
  `postId` int(25) NOT NULL,
  `userId` int(25) NOT NULL,
  `postTitle` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `post` varchar(5000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ticket`
--

CREATE TABLE `ticket` (
  `id` int(25) NOT NULL,
  `nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ticket` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `texto` varchar(5000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(25) NOT NULL,
  `Nome` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `User` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Pass` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Data_Nasc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postId`);

--
-- Índices para tabela `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `postId` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
