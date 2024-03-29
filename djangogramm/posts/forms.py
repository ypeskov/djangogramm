from django import forms
from posts.models import Post, Tag


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'description', 'status', 'tags']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'tags': forms.SelectMultiple(attrs={'class': 'form-control'})
        }


class TagForm(forms.ModelForm):
    class Meta:
        model = Tag
        fields = ['tag_name']
        widgets = {
            'tag_name': forms.TextInput(attrs={'class': 'form-control'}),
        }
