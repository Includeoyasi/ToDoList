'use strict';

/* Controllers */

var myControllers = angular.module('myControllers', []);

myControllers.controller('myViewCtrl', ['$scope',
	function($scope){
		$scope.tasks = []
		$scope.add = function(text){
			var time = new Date();
			$scope.tasks.push({'text':text,'time':time, 'active': false, 'complite': false});
			$scope.task_text = '';
		};
		$scope.del = function(index){
			$scope.tasks.splice(index,index+1);
		};
		$scope.complite = function(index){
			$scope.tasks[index].complite = true;
		};
		$scope.how_many_active = function(){
			return $scope.tasks.filter(function(task){return task.active==true;}).length;
		};
		$scope.filter_active = function(){
			return $scope.tasks.filter(function(task){return task.active==true;})
		};
		$scope.how_many_complite = function(){
			return $scope.tasks.filter(function(task){return task.complite==true;}).length;
		};
		$scope.filter_complite = function(){
			return $scope.tasks.filter(function(task){return task.complite==true;})
		};
		$scope.sort_active = function(){
			$scope.sort_type = {'active':true};
		};
		$scope.sort_complite = function(){
			$scope.sort_type = {'complite':true};
		};
		$scope.sort_all = function(){
			$scope.sort_type = '';
		};
		$scope.activate = function(index){
			if ($scope.tasks[index].active == true){
				$scope.tasks[index].active = false;
			}else{
				$scope.tasks[index].active = true;
			}
		}
	}]);
	