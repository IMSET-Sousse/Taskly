# 📝 Spécification Taskly (Django + Next.js)

## 📘 Présentation Générale

Ce projet est une application web de type **Taskly** permettant aux utilisateurs de créer, modifier, supprimer et gérer leurs tâches quotidiennes. Il est construit avec :

- **Frontend :** Next.js (React + Tailwind CSS)
- **Backend :** Django + Django REST Framework (DRF)
- **Base de données :** SQLite (développement) ou PostgreSQL (production)
- **Authentification :** JWT (JSON Web Token)

---

## ⚙️ Stack Technologique

| Côté       | Technologie              |
|------------|--------------------------|
| Frontend   | Next.js 14+, React, Tailwind CSS |
| Backend    | Django 4+, Django REST Framework |
| Auth       | JWT via Simple JWT ou DRF Token Auth |
| API        | RESTful API              |
| DB         | SQLite / PostgreSQL      |

---

## 🎯 Fonctionnalités

### Authentification
- [x] Inscription utilisateur
- [x] Connexion / Déconnexion
- [x] Authentification sécurisée avec token

### Gestion des Tâches (CRUD)
- [x] Créer une tâche
- [x] Afficher la liste des tâches
- [x] Modifier une tâche
- [x] Supprimer une tâche
- [x] Marquer une tâche comme terminée / non terminée

### Interface
- [x] Interface utilisateur claire et responsive
- [x] Filtres (toutes, terminées, non terminées)
- [ ] Tri par date ou priorité
- [ ] Notifications (à venir)

---

## 🧩 Modèle de Données Django

```python
# models.py
from django.contrib.auth.models import User
from django.db import models

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title
