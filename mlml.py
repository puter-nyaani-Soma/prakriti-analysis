#from sklearn.svm import LinearSVC
from sklearn.tree import DecisionTreeClassifier


from dotenv import load_dotenv
import os

load_dotenv()

#from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split, KFold,cross_val_score
from sklearn.tree import export_graphviz
#from sklearn.model_selection import validation_curve
from sklearn.metrics import accuracy_score,confusion_matrix,ConfusionMatrixDisplay
import pandas as pd
import pickle
import matplotlib.pyplot as plt #for confusion matrix
dataset = pd.read_csv(os.getenv("DATA"))
X=dataset.iloc[:,:-1].values
Y=dataset.iloc[:,20].values
tree = DecisionTreeClassifier(random_state=0)
#svc = LinearSVC()
#NB=GaussianNB()
#lr=LogisticRegression()
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size = 0.2, random_state = 42)
#svc.fit(X_train,y_train)
k=KFold(n_splits=5,shuffle=True,random_state=0)
print(cross_val_score(tree,X,dataset.Dosha,cv=k))
tree.fit(X_train,y_train)
#NB.fit(X_train,y_train)
#lr.fit(X_train,y_train)
#print(lr.score(X_train,y_train),lr.score(X_test,y_test))
#print(NB.score(X_train,y_train),NB.score(X_test,y_test))
#print("svc train",svc.score(X_train,y_train))#training accuracy
#print("svc test",svc.score(X_test,y_test))
#print(tree.score(X_train,y_train))#training accuracy
#print(tree.score(X_test,y_test))

#svc_predictions=svc.predict(X_test)
tree_predictions=tree.predict(X_test)
#nb_predictions=NB.predict(X_test)
#lr_predictions=lr.predict(X_test)

target=["vata","pitta","kapha","vata+pitta","vata+kapha","pitta+kapha"]
export_graphviz(tree,out_file="tree.jpg",class_names=target,feature_names=dataset.columns[0:20],impurity=False,filled=True)#graph ku
#output=int(tree.predict([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]))
#print(output)
#pickle.dump(tree,open('bodymodel.pl','wb'))
#model=pickle.load(open('bodymodel.pl','rb'))
print(confusion_matrix(y_test, tree_predictions))
disp = ConfusionMatrixDisplay(confusion_matrix(y_test, tree_predictions),display_labels=target)
disp.plot()
plt.show()