from django.contrib.auth.hashers import make_password

users_data = [
    {
        'email': 'user1@example.com',
        'password': make_password('user1password'),
        'first_name': 'User1',
        'last_name': 'User1 Lat Name',
        'username': 'user1@example.com',
        'bio': 'User1 Bio',
    },
    {
        'email': 'user2@example.com',
        'password': make_password('user2password'),
        'first_name': 'User2',
        'last_name': 'User2 Lat Name',
        'username': 'user2@example.com',
        'bio': 'User2 Bio',
    },
]

posts_data = [
    {
        'title': 'Post1 Title',
        'description': 'Post1 Description',
        'status': 'posted',
        'tags': ['tag1', 'tag2'],
        'images': ['img1.jpg', 'img2.jpg'],
    },
    {
        'title': 'Post2 Title',
        'description': 'Post2 Description',
        'status': 'posted',
        'tags': ['tag2', 'tag3'],
        'images': ['img3.jpg', 'img4.jpg'],
    },
    {
        'title': 'Post3 Title',
        'description': 'Post3 Description',
        'status': 'posted',
        'tags': ['tag3', 'tag4'],
        'images': ['img5.jpg', 'img6.jpg'],
    },
    {
        'title': 'Post4 Title',
        'description': 'Post4 Description',
        'status': 'posted',
        'tags': ['tag4', 'tag5'],
        'images': ['img7.jpg', 'img8.jpg'],
    },
    {
        'title': 'Post5 Title',
        'description': 'Post5 Description',
        'status': 'posted',
        'tags': ['tag5', 'tag6'],
        'images': ['img9.jpg', 'img10.jpg'],
    },
    {
        'title': 'Post6 Title',
        'description': 'Post6 Description',
        'status': 'posted',
        'tags': ['tag6', 'tag7'],
        'images': ['img11.jpg', 'img12.jpg'],
    },
]

tags_data = [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7',
]
