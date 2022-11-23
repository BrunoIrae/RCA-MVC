CREATE TABLE `cadastro_pet`.`pets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_pet` VARCHAR(45) NOT NULL,
  `sexo_pet` VARCHAR(45) NOT NULL,
  `data_resgate` DATE NOT NULL,
  `comentario` TEXT(100) NOT NULL,
  PRIMARY KEY (`id`));