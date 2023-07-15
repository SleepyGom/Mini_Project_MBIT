from django.shortcuts import render
from .models import Question, Developer, Choice

# Create your views here.
def index(request):
    developers = Developer.objects.all()
    
    context = {
        'developers' : developers,
    }
    
    return render(request, 'index.html', context)

def form(request):
    questions = Question.objects.all()
    
    context = {
        'questions' : questions,
    }
    
    return render(request, 'form.html', context)

def result(request):
    # 문항수
    N = Question.objects.count()
    # 개발자 유형 수
    K = Developer.objects.count()
    # print(f'문항수 : {N}',f' 개발자 유형 수 : {K}')
    
    counter = [0] * (K + 1)
    # print(request.POST)
    
    for n in range(1, N+1):
        developer_id = int(request.POST[f'question-{n}'][0])
        counter[developer_id] += 1
        
    # 최고점 개발 유형
    best_developer_id = max(range(1, K+1), key=lambda id:counter[id])
    best_developer = Developer.objects.get(pk=best_developer_id)
    best_developer.count += 1
    best_developer.save()
    context = {
        'developer' : best_developer,
        'counter' : counter
    }
    
    return render(request, 'result.html', context)