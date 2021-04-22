import 'package:DevQuiz/home/home_page.dart';
import 'package:flutter/material.dart';

class AppWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "DevQuiz",
      home: HomePage(),
    );
  }
}

// MaterialApp (Primeiro Widget) -> Primeiro componente do nosso App
// Utiliza o MaterialApp para renderizar nossos componentes

// StatelessWidget -> extends recebe um override para sobreescrever
// BuildContext -> retorna o contexto de construção

// Todo no Flutter é através de Widgets

// Scaffold -> Esqueleto, vantagem de ter alguns Pré-Sets.
// Container-> Esqueleto, sem pré modelos.
