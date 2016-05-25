/**
 * Created by SQ05 on 5/24/2016.
 */
/*
var app = angular.module('calculator1', []);

app.controller("getCal1", ['$log','$scope', function($log ,$scope){

    /**
     *
     *   angular model
     * @type {{one: number}}

    $scope.calValues= {

        one1:1


    };

    /**
     *
     *   Click one action
     *

    $scope.clickOne1 = function(){
      $log.log('Hello');
    };


}]);
*/
var cal = angular.module('calculator', []);
var conCat = "";
cal.controller("getCal",['$log', '$scope', function($log, $scope){

    $scope.calVal={
    one:1,
    two:2,
    three:3,
    four:4,
        five:5,
        six:6,
            seven:7,
            eight:8,
            nine:9,
            zero:0,
            add:"+",
            subtract: "-",
            divide:"/",
            multiply:"*",
        on:"Switched On",
            off:"Switched Off",
            cancel:"Enter Prefered Value",
        result:''
        
    };

    $scope.clickCancel=function(){
        $scope.calVal.result=$scope.calVal.cancel;
        conCat= "";
        return false;
    };

    $scope.clickOn=function(){
        $scope.calVal.result=$scope.calVal.on;
        conCat= "";
        return false;
    };

    $scope.clickOff=function(){
        $scope.calVal.result=$scope.calVal.off;
        conCat= "";
        return false;
    };

 $scope.clickOne=function(){
  
       conCat+=$scope.calVal.one;
     $log.log(conCat);
     $scope.calVal.result=conCat;

    };

    $scope.clickTwo=function(){
     
        conCat+=$scope.calVal.two;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickThree=function(){
     
        conCat+=$scope.calVal.three;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickFour=function(){
     
        conCat+=$scope.calVal.four;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickFive=function(){
     
        conCat+=$scope.calVal.five;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickSix=function(){
     
        conCat+=$scope.calVal.six;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickSeven=function(){
     
        conCat+=$scope.calVal.seven;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickEight=function(){
     
        conCat+=$scope.calVal.eight;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickNine=function(){
     
        conCat+=$scope.calVal.nine;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickZero=function(){
     
        conCat+=$scope.calVal.zero;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickAdd=function(){
     
        conCat+=$scope.calVal.add;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickAdd=function(){
     
        conCat+=$scope.calVal.add;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickSub=function(){
     
        conCat+=$scope.calVal.subtract;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickDiv=function(){
     
        conCat+=$scope.calVal.divide;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };

    $scope.clickMul=function(){
        conCat+=$scope.calVal.multiply;
        $log.log(conCat);
        $scope.calVal.result=conCat;
    };


    $scope.clickAns=function(){
        $scope.calVal.result=eval(conCat);
        conCat= "";
        return false;
    };

}]);