from django import forms

from .models import UserProfile


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100, label='Email')
    password = forms.CharField(widget=forms.PasswordInput, label='Password')


class UserProfileForm(forms.ModelForm):
    first_name = forms.CharField(max_length=255, required=False)
    last_name = forms.CharField(max_length=255, required=False)

    class Meta:
        model = UserProfile
        fields = ['avatar', 'bio', 'first_name', 'last_name']

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None)
        super(UserProfileForm, self).__init__(*args, **kwargs)
        if user:
            self.fields['first_name'].initial = user.first_name
            self.fields['last_name'].initial = user.last_name

