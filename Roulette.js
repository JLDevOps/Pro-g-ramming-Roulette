//Roulette.js
//Function to spin the table, and generate a resulting number that will be compared to a corresponding value of a challenge.
function PROGROLL()
{
     var x = Math.floor(Math.random() * 106);
     switch (x) {
         case 0:
            x = "Name Generator (+optional credentials)";
            break;
         case 1:
             x = "Higher/Lower, Heads/Tails";
             break;
         case 2:
             x = "Temperature Converter";
             break;
         case 3:
             x = "Calculate age in seconds (with leap years)";
             break;
         case 4:
             x = "Encryption/Decryption Algorithm";
             break;
         case 5:
             x = "FizzBuzz";
             break;
         case 6:
             x = "Rock,Paper,Scissors (+ Lizard,Spock)";
             break;
         case 7:
             x = "Project Euler (in every language you know)";
             break;
         case 8:
             x = "Hangman";
             break;
         case 9:
             x = "Love Calculator";
             break;
         case 10:
             x = "Random Sentence Generator";
             break;
         case 11:
             x = "Password/passphrase Generator";
             break;
         case 12:
             x = "Internet Time ((S)NTP)";
             break;
         case 13:
             x = "Haiku Generator";
             break;
         case 14:
             x = "Magic Eight Ball";
             break;
         case 15:
             x = "Collatz Conjecture";
             break;
         case 16:
             x = "Reverse a String";
             break;
         case 17:
             x = "Eulerian Path";
             break;
         case 18:
             x = "Simple File Explorer";
             break;
         case 19:
             x = "Count Words in A String (lines, sentences, paragraphs, typos, &c.)";
             break;
         case 20:
             x = "Minesweeper";
             break;
         case 21:
             x = "Connect Four";
             break;
         case 22:
             x = "BMI Calculator";
             break;
         case 23:
             x = "Thread/Image Downloader (Reddit, 4Chan, etc)";
             break;
         case 24:
             x = "Sudoku Generator/Solver";
             break;
         case 25:
             x = "Maze Generator/Solver (random graphs/trees)";
             break;
         case 26:
             x = "Radix (base) Converter";
             break;
         case 27:
             x = "Picross Solver";
             break;
         case 28:
             x = "Fibonacci Sequence";
             break;
         case 29:
             x = "Factorial";
             break;
         case 30:
             x = "Cipher Encryption/Decryption Tool"
             break;
         case 31:
            x = "Blackjack";
            break;
         case 32:
             x = "Dungeons & Dragons with AI";
             break;
         case 33:
             x = "Generate ASCII tree";
             break;
         case 34:
             x = "Genetic Algorithms on Polygon";
             break;
         case 35:
             x = "Benford's Law";
             break;
         case 36:
             x = "Currency Converter (+ various units, comodities, etc; + history)";
             break;
         case 37:
             x = "Static Website Generator";
             break;
         case 38:
             x = "Crossword Game";
             break;
         case 39:
             x = "Scientific Calculator (CLI or GUI)";
             break;
         case 40:
             x = "Perlin Noise";
             break;
         case 41:
             x = "Image Viewer";
             break;
         case 42:
             x = "ASCII Digital Clock";
             break;
         case 43:
             x = "Dijkstra's Algorithm";
             break;
         case 44:
             x = "Text/Morse Code Translator (+ sound)";
             break;
         case 45:
             x = "Tic-Tac-Toe";
             break;
         case 46:
             x = "Snake Game";
             break;
         case 47:
             x = "FTP Client (+ server)";
             break;
         case 48:
             x = "Telnet Server (+ client, netctat clone?)";
             break;
         case 49:
             x = "IMP Interpreter";
             break;
         case 50:
             x = "Tetris";
             break;
         case 51:
             x = "Conway's Game of Life (other cell. automata)";
             break;
         case 52:
             x = "Web Crawler";
             break;
         case 53:
             x = "Text Editor";
             break;
         case 54:
             x = "RSS Feed Reader";
             break;
         case 55:
             x = "RPN Calculator";
             break;
         case 56:
             x = "Mandelbrot Set (+ other fractals)";
             break;
         case 57:
             x = "Sorting Algorithms (+ visualisation)";
             break;
         case 58:
             x = "Custom Markup -> HTML Converter";
             break;
         case 59:
             x = "N Queens Problem";
             break;
         case 60:
             x = "Flow in a Network (Ford-Fulkerson Algo)";
             break;
         case 61:
             x = "Credential Validator (phone, email, &c)"
             break;
         case 62:
            x = "Linked List (single, double)";
            break;
         case 63:
             x = "Mastermind";
             break;
         case 64:
             x = "Random Image Generator (parametric)";
             break;
         case 65:
             x = "Ulam Spiral";
             break;
         case 66:
             x = "Klingon Translator (Or any Language)";
             break;
         case 67:
             x = "Prime Number Generator Using A Sieve";
             break;
         case 68:
             x = "Markov Chains (random text generation)";
             break;
         case 69:
             x = "Graphical Analog Clock";
             break;
         case 70:
             x = "Two Languages Communicatiing with Each Other (C++ & JAVA, Lisp & Python, &c)";
             break;
         case 71:
             x = "Triangle Number Calculator";
             break;
         case 72:
             x = "Typing Speed Calculator";
             break;
         case 73:
             x = "Name Art in ASCII";
             break;
         case 74:
             x = "Towers of Hanoi (more disks, more poles)";
             break;
         case 75:
             x = "Quine";
             break;
         case 76:
             x = "IRC bot";
             break;
         case 77:
             x = "Brainfuck Interpreter (+ optimization, multiple targets)";
             break;
         case 78:
             x = "Reverse a String";
             break;
         case 79:
             x = "Eulerian Path";
             break;
         case 80:
             x = "Simple File Explorer";
             break;
         case 81:
             x = "Count Words in A String (lines, sentences, paragraphs, typos, &c.)";
             break;
         case 82:
             x = "Knight's tour";
             break;
         case 83:
             x = "Geekcode Generator";
             break;
         case 84:
             x = "Define, Translate & Rotate a Polygon (+ other affine transformation)";
             break;
         case 85:
             x = "Pong with Variable Vectors";
             break;
         case 86:
             x = "Battleship with AI";
             break;
         case 87:
             x = "Simple Paint Program";
             break;
         case 88:
             x = "TCP Chat with Basic Encryption";
             break;
         case 89:
             x = "Increment Economy Simulator";
             break;
         case 90:
             x = "Encrypting Data in Images (steganography)";
             break;
         case 91:
             x = "Pascal's Triangle";
             break;
         case 92:
             x = "Sine Wave Generator From Pseudorandom Numbers"
             break;
         case 93:
            x = "Flappy Bird";
            break;
         case 94:
             x = "Fourier Transform (fast or 'slow'; + visualisations)";
             break;
         case 95:
             x = "Method Ringing Simulator";
             break;
         case 96:
             x = "Binary Search (n-ary)";
             break;
         case 97:
             x = "Nintendo Oil Panic";
             break;
         case 98:
             x = "Sierpinski Triangle";
             break;
         case 99:
             x = "Dot & Cross Product of Two Vectors (Exterior Product)";
             break;
         case 100:
             x = "Little Man Computer Simulation";
             break;
         case 101:
             x = "Lisp Interpreter";
             break;
         case 102:
             x = "Enigma Simulator with a Configuration File (+ decrypt messages without known settings)";
             break;
         case 103:
             x = "Anonymous Chatroom (ex. hack.chat)";
             break;
         case 104:
             x = "Encrypted Chat System between Computers";
             break;
         case 105:
             x = "Cat Videos Collector";
             break;
     }
    
    document.getElementById("demo").innerHTML = x;
}


function LANGROLL()
{
    var x = Math.floor(Math.random() * 19);
     switch (x) {
         case 0:
            x = "JAVA";
            break;
         case 1:
             x = "C++";
             break;
         case 2:
             x = "C";
             break;
         case 3:
             x = "JAVASCRIPT";
             break;
         case 4:
             x = "PYTHON";
             break;
         case 5:
             x = "HTML";
             break;
         case 6:
             x = "PHP";
             break;
         case 7:
             x = "SHELL";
             break;
         case 8:
             x = "OBJECTIVE C";
             break;
         case 9:
             x = "RUBY";
             break;
         case 10:
             x = "C#";
             break;
         case 11:
             x = "ASSEMBLY";
             break;
         case 12:
             x = "SQL";
             break;
         case 13:
             x = "PERL";
             break;
         case 14:
             x = "ASP";
             break;
         case 15:
             x = "D";
             break;
         case 16:
             x = "VISUAL BASIC";
             break;
         case 17:
             x = "LUA";
             break;
         case 18:
             x = "FORTRAN";
             break;
     }
    
    document.getElementById("LANG").innerHTML = x;
}
