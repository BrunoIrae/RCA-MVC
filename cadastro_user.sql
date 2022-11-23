CREATE TABLE `cadastro_user`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_user` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `confirma_senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));