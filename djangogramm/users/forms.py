from django import forms

from .models import UserProfile


class UserProfileForm(forms.ModelForm):
    first_name = forms.CharField(max_length=255, required=False,
                                 widget=forms.TextInput(attrs={'class': 'form-control'}),
                                 label='First Name:')
    last_name = forms.CharField(max_length=255, required=False,
                                widget=forms.TextInput(attrs={'class': 'form-control'}),
                                label='Last Name:')

    class Meta:
        model = UserProfile
        fields = ['avatar', 'bio', 'first_name', 'last_name']

    def __init__(self, *args, **kwargs):  # pragma: no cover
        user = kwargs.pop('user', None)
        super(UserProfileForm, self).__init__(*args, **kwargs)
        if user:
            self.fields['first_name'].initial = user.first_name
            self.fields['last_name'].initial = user.last_name
