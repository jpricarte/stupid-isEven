import java.util.Scanner;

public class CheckIfIsEven {

    public static void main(String[] args) {

        System.out.println("Number: ");
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();

        if(number % 2 == 0){
            System.out.println("IT IS AN EVEN NUMBER HOHOHO, GREAT!");
        } else {
            System.out.println("THIS IS ODD.... :?");
        }
    }
}
