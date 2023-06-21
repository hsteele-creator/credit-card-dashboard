import { logDOM } from "@testing-library/react";
import React from "react";
import apple from "./apple-logo.png";
import mcdonalds from "./mcdonalds.png";
import starbucks from "./starbucks.png";
import samsung from "./samsung.png";
import appStore from "./app-store.png";
import netflix from "./netflix.png";
import youtube from "./youtube.png";
import amazon from "./amazon-pay.png";


export const Data = {
    currentUser: "John",
    currentCard: 2,
    cardIndex: 0,
    John: {
      name: "John Johnson",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      cards: [
        {
          cardType: "VISA",
          cardNumber: "4485076160182107",
          month: "02",
          year: "2025",
          cvv: 631,
          balance: `240`,
          active: true,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Mcdonald's", image : mcdonalds, price : "7.50", time : "1:22 AM", date : "03/17/2023"},
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"}
          ],
        },
        {
          cardType: "MASTERCARD",
          cardNumber: "5203906260947058",
          month: "04",
          year: "2028",
          cvv: 183,
          balance: `125`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"}
          ],
        },
        {
          cardType: "DISCOVER",
          cardNumber: "6011830616693515",
          month: "07",
          year: "2026",
          cvv: 410,
          balance: `870`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Mcdonald's", image : mcdonalds, price : "7.50", time : "1:22 AM", date : "03/17/2023"},
          ],
        },
      ],
      goals: [
        { goal: "Make a Savings Account", completed: false },
        { goal: "Save Money for a Diamond Ring", completed: false },
        { goal: "Pay Off College Debt", completed: false },
      ],
    },
  
    Tyler: {
      name: "Tyler Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      cards: [
        {
          cardType: "AMEX",
          cardNumber: "348426549087847",
          month: "05",
          year: "2023",
          cvv: 268,
          balance: `500`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Mcdonald's", image : mcdonalds, price : "7.50", time : "1:22 AM", date : "03/17/2023"},
          ],
        },
        {
          cardType: "UNIONPAY",
          cardNumber: "6222026073857579",
          month: "08",
          year: "2027",
          cvv: 732,
          balance: `800`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"}
          ],
        },
        {
          cardType: "VISA",
          cardNumber: "4485446741380498",
          month: "06",
          year: "2024",
          cvv: 143,
          balance: `4200`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Amazon", image : amazon, price : "123.50", time : "12:22 PM", date : "03/17/2023"}
          ],
        },
      ],
      goals: [
        { goal: "Increase Salary by 10%", completed: false },
        { goal: "Buy a New Car", completed: false },
        { goal: "Set Aside Money for Kids College Fund", completed: false },
      ],
    },
  
    Jake: {
      name: "Steve Wright",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
      cards: [
        {
          cardType: "DINERS",
          cardNumber: "3898422938975658",
          month: "07",
          year: "2026",
          cvv: 437,
          balance: `500`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
          ],
        },
        {
          cardType: "AMEX",
          cardNumber: "343371115714694",
          month: "09",
          year: "2029",
          cvv: 108,
          balance: `5100`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "App Store", image : appStore, price : "2.80", time : "9:42 PM", date : "06/07/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},

          ],
        },
        {
          cardType: "VISA",
          cardNumber: "4408345140263509",
          month: "07",
          year: "2026",
          cvv: 700,
          balance: `2650`,
          income : "1200",
          outcome : "350",
          savings : "600",
          transactions: [
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
            {title : "Youtube", image : youtube, price : "15.40", time : "3:18 PM", date : "09/25/2021"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Starbucks", image : starbucks, price : "15.75", time : "6:42 AM", date : "06/19/2023"},
            {title : "Apple", image : apple, price : "150.15", time : "9:16 AM", date : "07/23/2022"},
            {title : "Samsung", image : samsung, price : "212.30", time : "11:42 AM", date : "06/27/2023"},
            {title : "Netflix", image : netflix, price : "7.50", time : "10:16 PM", date : "01/07/2023"},
          ],
        },
      ],
      goals: [
        { goal: "Buy a New Phone", completed: false },
        { goal: "Save for House Down Payment", completed: false },
        { goal: "Get Another Source of Income", completed: false },
      ],
    },
  };
  