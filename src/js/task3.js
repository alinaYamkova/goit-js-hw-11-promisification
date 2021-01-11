// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции 
// onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;  

    // if (canProcess) {
    //   onSuccess(transaction.id, delay);  
    // } else {
    //   onError(transaction.id);  
    // }
//   }, delay);    
// };
/*Работает так */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

const makeTransaction = ({id: transaction, time}) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      
        if (canProcess) {
          res({id: transaction, time: delay});
         } else {
          rej({id: transaction});
        }  
    }, delay);    
  });  
};  

const logSuccess = ({id, time}) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};  
const logError = ({id}) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};  

//* Должно работать так*/
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);