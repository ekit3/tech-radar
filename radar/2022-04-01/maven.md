---
title:      "Maven"
ring:       adopt 
quadrant:   back
---

Dans l'écosystème Java, deux solutions existent pour la gestion du build et des dépendances d'une application ou d'une librairie, à savoir *Gradle* et *Maven*.

*Gradle* est historiquement plus lié aux mondes du développement Android, mais également petit à petit utilisé sur de plus en plus de projets Java.
Cependant, *Maven* reste l'outil de référence pour la majorité des projets.
*Spring* suit également ce mouvement, en proposant *Maven* comme étant l'outil de build par défaut lors de la création d'un nouveau projet via leur outil [start.spring.io](https://start.spring.io).

Nous positionnons *Maven* dans le ring *adopt* de ce radar, car nous pensons que l'ensemble de nos développeurs back doivent maîtriser cet outil du quotidien.

Par ailleurs, *Gradle* est référencé dans le ring *assess* de ce radar, car nous surveillons son évolution, sans pour autant investir dessus pour le moment.