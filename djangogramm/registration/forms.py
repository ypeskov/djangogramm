from django import forms


class RegistrationForm(forms.Form):
    email = forms.EmailField(label='Email', max_length=100)
    password = forms.CharField(label='Password', max_length=100, widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat password', max_length=100, widget=forms.PasswordInput)
