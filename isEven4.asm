; Created by Jordi Pujol Ricarte

section	.text
   global _start     ;must be declared for linker (ld)
	
_start:	            ;tells linker entry point

   mov   eax,88      ;PLACE HERE THE VALUE TO BE TESTED
   mov   ebx,00      ;placing 0 in ebx

begin:
   cmp   eax, 00     ;compare with zero
   jz    checkPar    ;go to parity check
   call  changePar   ;go to the real algorithm
   jmp   begin

checkPar:
   cmp   ebx,00      ;check if is zero
   je    isEvenMsg   ;show even msg
   jne   isOddMsg    ;show odd msg

isEvenMsg:
   mov	edx,evenLen ;message length
   mov	ecx,evenMsg ;message to write
   jmp   writeMsg
	
isOddMsg:
   mov	edx,oddLen ;message length
   mov	ecx,oddMsg ;message to write

writeMsg:
   mov	ebx,1       ;file descriptor (stdout)
   mov	eax,4       ;system call number (sys_write)
   int	0x80        ;call kernel
   
   mov	eax,1       ;system call number (sys_exit)
   int	0x80        ;call kernel

changePar:
   dec   eax         ;decrement eax
   not   ebx         ;invert ebx
   ret

section	.data
evenMsg db 'its even!', 0xa  ;string to be printed if even
evenLen equ $ - evenMsg     ;length of the string

oddMsg db 'its odd!', 0xa  ;string to be printed if odd
oddLen equ $ - oddMsg     ;length of the string